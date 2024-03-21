
import "./index.scss";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
export default function App() {

  const [session, setSession] = useState(null);

  const customTheme = {
    default: {
      colors: {
        brand: 'hsl(153 60.0% 53.0%)',
        brandAccent: 'hsl(154 54.8% 45.1%)',
        brandButtonText: 'white',
        // ..
      },
    },
  }


  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);
  if (!session) {
    return (
      <div className="login-wrapper">
        <div>
          <Auth supabaseClient={supabase} theme="default" appearance={{ theme: customTheme }} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>Logged in!</div>
        <button onClick={() => supabase.auth.signOut()}>Sign out</button>
      </div>
    );
  }
}