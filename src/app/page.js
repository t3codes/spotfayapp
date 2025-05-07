"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CryptoJS from "crypto-js";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const secretKey = "jesuscaminhoverdadevida"; // Chave secreta para criptografia

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }

    setError("");

    const userId = uuidv4();

    // Cria o objeto original
    const userData = {
      id: userId,
      email: email,
    };

    // Converte para string e criptografa tudo
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(userData),
      secretKey
    ).toString();

    // Armazena no localStorage
    localStorage.setItem("spotifyopina_user", encryptedData);

    alert("E-mail salvo com sucesso!");
    router.push('/dashboard');
    // Redirecionamento ou próxima ação
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col justify-center items-center p-4">
      {/* Container principal */}
      <div className="w-full max-w-sm bg-white shadow-lg rounded-xl p-6 flex flex-col">
        {/* Logo */}
        <div className="flex justify-center mb-6">
        <Image
            src="/opinilogo.png"
            alt="Logo do SpotifyOpina"
            width={180}
            height={180}
            className="object-contain"
          />
        </div>

        {/* Título e subtítulo */}
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2 leading-tight">
          Bem-vindo(a) ao<br />
          <span className="text-2xl">SpotifyOpina</span>
        </h2>
        <p className="text-gray-600 text-center mb-6 text-sm">
          Insira seu e-mail para prosseguir
        </p>

        {/* Input de e-mail */}
        <input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-green-500 transition"
        />

        {/* Erro de validação */}
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        {/* Botão */}
        <button
          onClick={handleLogin}
          className="w-full py-3 mt-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition"
        >
          Entrar
        </button>
      </div>

      {/* Rodapé */}
      <footer className="mt-8 text-center text-gray-700 text-xs">
        <p className="font-medium">2025 Spotify LLC</p>
        <p>Termos e Política de Privacidade</p>
      </footer>
    </div>
  );
}
