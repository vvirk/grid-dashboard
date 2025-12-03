import './Block.css';
import type { MouseEvent, PointerEvent } from 'react';
import type { Block as BlockType } from '../../types/block';
import { useGrid } from '../../context/GridContext';
import { LineWidget } from '../widgets/LineWidget';
import { BarWidget } from '../widgets/BarWidget';
import { TextWidget } from '../widgets/TextWidget';

interface BlockProps {
  block: BlockType;
}

const blockLabelMap: Record<BlockType['type'], string> = {
  line: 'Mentions over time',
  bar: 'Sentiment breakdown',
  text: 'Notes',
};

function getBlockLabel(type: BlockType['type']): string {
  return blockLabelMap[type] ?? 'Widget';
}

const widgetMap = {
  line: <LineWidget />,
  bar: <BarWidget />,
  text: <TextWidget />,
} as const;

export function Block({ block }: BlockProps) {
  const { deleteBlock } = useGrid();

  const handleDeleteClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    deleteBlock(block.id);
  };

  const handleDeletePointerDown = (e: PointerEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="block">
      <button
        type="button"
        className="block__delete-button"
        onPointerDown={handleDeletePointerDown}
        onClick={handleDeleteClick}
        aria-label="Delete block"
      >
        ×
      </button>

      <div className="block__content">
        <span className="block__label">{getBlockLabel(block.type)}</span>
        {widgetMap[block.type]}
      </div>
    </div>
  );
}