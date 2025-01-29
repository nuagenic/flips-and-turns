"use client";

import { useState } from "react";
import Thumbnail from "../Thumbnail";
import Modal from "../Modal";
import { CardType } from "@/app/page";

type ArchiveGalleryProps = {
  cards: CardType[];
};

export default function ArchiveGallery({ cards }: ArchiveGalleryProps) {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  return (
    <div className="flex flex-wrap justify-center gap-5 pb-24 pt-32">
      {cards.map((card) => {
        return (
          <Thumbnail
            key={card.id}
            src={card.content}
            onClick={setSelectedCard}
          />
        );
      })}
      {selectedCard && (
        <Modal src={selectedCard} onClose={() => setSelectedCard(null)} />
      )}
    </div>
  );
}
