import './Block.css';
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

  const handleDelete = () => {
    deleteBlock(block.id);
  };

  return (
    <div className="block">
      <button
        type="button"
        className="block__delete-button"
        onClick={handleDelete}
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