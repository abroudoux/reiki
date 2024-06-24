import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn
} from "@tabler/icons-react";

export default function BentoGridSection() {
  return (
    <BentoGrid className="max-w-5xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Réduit le stress, calme les angoisses et détend profondément.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "The Digital Revolution",
    description: "Nettoie les énergies négatives (tristesse , colère, peurs).",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "The Art of Design",
    description: "Soulage tensions et douleurs, favorise l'élimination des toxines.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "The Power of Communication",
    description:
      "Renforce les facultés de récupération après un traumatisme physique ou psychique.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Développe la connaissance de soi et accélère tout travail spirituel.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "The Joy of Creation",
    description: "Contribue à rééquilibrer l'ensemble de nos relations à notre environnement.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "The Spirit of Adventure",
    description:
      "Augmente la confiance, le respect , l'acceptation , l'amour de soi et des autres.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />
  }
];
