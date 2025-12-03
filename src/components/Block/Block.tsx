import './Block.css';
import type { MouseEvent, PointerEvent } from 'react';
import type { Block as BlockType } from '../../types/block';
import { useGrid } from '../../context/GridContext';

interface BlockProps {
  block: BlockType;
}

function getBlockLabel(type: BlockType['type']): string {
  switch (type) {
    case 'line':
      return 'Line Chart';
    case 'bar':
      return 'Bar Chart';
    case 'text':
      return 'Text Block';
    default:
      return 'Block';
  }
}

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
      </div>
    </div>
  );
}