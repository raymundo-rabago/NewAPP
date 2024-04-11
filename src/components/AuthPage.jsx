import { Paper, TextInput, PasswordInput, Checkbox, Button, Title } from '@mantine/core';
import classes from './AuthPage.module.css';

export function AuthPage() {
    return (
        <div className={classes.wrapper}>
            <Paper className={classes.form} radius={0} p={30}>
                <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
                    Soluxe App
                </Title>

                <TextInput label="Email address" placeholder="hello@gmail.com" size="md" />
                <PasswordInput label="Password" placeholder="Your password" mt="md" size="md" />
                <Checkbox label="Keep me logged in" mt="xl" size="md" />
                <Button fullWidth mt="xl" size="md">Entrar</Button>
            </Paper>
        </div>
    )
};