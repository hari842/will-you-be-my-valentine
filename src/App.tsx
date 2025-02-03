"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 10 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Think again",
      "Surely not",
      "Give it another thought",
      "This could be a mistake",
      "Don't be so cold",
      "Change of heart?",
      "What if I asked really nicely?",
      "Sunshine please",
      "How about tiramisu cake?",
      "With a mosambi juice?",
      "With Vietnamese coffee from Blue Tokai Coffee Roasters?",
      "More Harry Potter Kinder Joys?",
      "Don't give trass to me please",
      "Please Mrunal",
      "I'm going to die",
      "Thanks to you, I'm dead",
      "Okay, you're talking to Hari's ghost",
      "Please re",
      "Pch pch",
      "What is this Mrunal, don't make me cry re",
      "Please Mrunal",
      "You won",
      "You're impossible",
      "Now the game begins",
      "Best of luck",
      "NO :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzczOWsxZ3M1YjRrYWp3aHRnOGNhMnFuNjJ6anFzaXZpZWU2ZW5jdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9AIeG4ZmVb4mYdlIOx/giphy.gif" />
          <div className="my-4 text-4xl font-bold">WOOOOOO!!! Still Cold Hearted, Get Some sunshine :')))</div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Mrunal, Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
