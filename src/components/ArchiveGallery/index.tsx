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
    <div className="grid grid-cols-3 gap-2 pb-24 pt-32 px-2 md:grid-cols-4 md:gap-5 md:px-5 lg:grid-cols-6">
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
