'use client';
import Image from "next/image";
import {useState} from "react";

export default function Home() {
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [resultado, setResultado] = useState(0);

    function somar() {
        setResultado(parseFloat(valor1) + parseFloat(valor2));
        // put a class name in button to animate
        document.getElementById("somar").classList.add("shake-horizontal");
        // remove class from element
        setTimeout(() => {
            document.getElementById("somar").classList.remove("shake-horizontal");
        }, 1000);
    }


  return (
      <main>
        <header className="bg-black h-20 flex justify-center items-center mb-4">
            <p className="text-3xl text-lime-500">
                Somar
            </p>
        </header>
          <div
            className={"flex flex-col justify-center items-center"}
          >
              <div
                  className="flex flex-col w-full md:flex-row gap-2 items-center justify-center"
              >
                  <input
                      type="number"
                      placeholder={"Digite aqui"}
                      className="border-4 rounded p-1"
                      onChange={(e) => setValor1(e.target.value)}
                      value={valor1}
                  />
                  <input
                      type="number"
                      placeholder={"Digite aqui"}
                      className="border-4 rounded p-1"
                      onChange={(e) => setValor2(e.target.value)}
                      value={valor2}
                  />
                  <button
                      className="bg-blue-500 p-2 rounded"
                      id={"somar"}
                      onClick={somar}
                  >
                      Somar
                  </button>
              </div>
              <div>
                  <p
                      className="text-xl w-[180px] text-red-700 mt-5 text-center rounded"
                  >
                      Resultado: {resultado}
                  </p>
              </div>
          </div>
      </main>
  )
}
