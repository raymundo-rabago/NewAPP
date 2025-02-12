import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
interface ProductFormProps {
  onSubmit: (product: { name: string; price: number; image: string }) => void;
}
const ProductForm = ({ onSubmit }: ProductFormProps) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState<string>("");
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("La imagen debe ser menor a 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !image) {
      toast.error("Por favor complete todos los campos");
      return;
    }
    onSubmit({
      name,
      price: Number(price),
      image,
    });
    setName("");
    setPrice("");
    setImage("");
    setPreviewUrl("");
    toast.success("Producto agregado exitosamente");
  };
  return (
    <Card className="w-full max-w-2xl mx-auto p-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">Registro de Producto</h2>
        <p className="text-sm text-muted-foreground">
          Complete los detalles del producto a continuación
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="image">Imagen del Producto</Label>
            <div className="flex flex-col items-center gap-4">
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full"
              />
              {previewUrl && (
                <div className="relative w-40 h-40 rounded-lg overflow-hidden">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Nombre del Producto</Label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ingrese el nombre del producto"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Precio</Label>
            <Input
              id="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Ingrese el precio"
              min="0"
              step="0.01"
            />
          </div>
        </div>
        <Button type="submit" className="w-full">
          Registrar Producto
        </Button>
      </form>
    </Card>
  );
};
export default ProductForm;