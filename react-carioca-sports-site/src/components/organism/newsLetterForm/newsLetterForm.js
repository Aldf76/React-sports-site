import React, { useState } from "react";
import { Box, Typography, Checkbox, TextField, Button, Link } from "@mui/material";
import newsletterFormStyles from "./newsLetterFormStyles";

const NewsletterForm = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = true; // Troque por lógica real
    setMessage(success ? "Cadastro realizado com sucesso!" : "Erro ao realizar o cadastro. Tente novamente.");
  };

  return (
    <Box component="form" sx={newsletterFormStyles.container} onSubmit={handleSubmit}>
      <Typography sx={newsletterFormStyles.title}>
        Receba ofertas e descontos exclusivos
      </Typography>

      {/* Campo de E-mail */}
      <TextField
        variant="outlined"
        placeholder="Digite seu e-mail"
        fullWidth
        sx={newsletterFormStyles.input}
      />

      {/* Checkbox */}
      <Box sx={newsletterFormStyles.checkboxContainer}>
        <Checkbox sx={newsletterFormStyles.checkbox} />
        <Typography variant="body2" color="#FFFFFF">
          Concordo em receber{" "}
          <strong>ofertas e novidades da loja</strong> por e-mail conforme a{" "}
          <Link href="#" sx={newsletterFormStyles.link}>
            Política de Privacidade
          </Link>
        </Typography>
      </Box>

      {/* Botão de envio */}
      <Button type="submit" sx={newsletterFormStyles.button}>
        Enviar
      </Button>

      {/* Mensagem de sucesso/erro */}
      {message && (
        <Typography sx={newsletterFormStyles.message(message.includes("sucesso"))}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default NewsletterForm;
