import './Grid.css';
import type { CSSProperties, ReactNode } from 'react';
import {
  DndContext,
  useDroppable,
  useDraggable,
  type DragEndEvent,
} from '@dnd-kit/core';
import { useGrid } from '../../context/GridContext';
import { Block } from '../Block/Block';
import type { Block as BlockType } from '../../types/block';

interface DroppableCellProps {
  index: number;
  isEmpty: boolean;
  children: ReactNode;
}

function DroppableCell({ index, isEmpty, children }: DroppableCellProps) {
  const { setNodeRef, isOver } = useDroppable({
    id: `cell-${index}`,
  });

  const isActive = isOver && isEmpty;

  return (
    <div
      ref={setNodeRef}
      className={`grid__cell${isActive ? ' grid__cell--droppable' : ''}`}
    >
      {children}
    </div>
  );
}

interface DraggableBlockProps {
  index: number;
  block: BlockType;
}

function DraggableBlock({ index, block }: DraggableBlockProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `block-${index}`,
    data: { fromIndex: index },
  });

  const style: CSSProperties = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
        opacity: 0.8,
      }
    : {};

  return (
    <div className="draggable-wrapper" ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Block block={block} />
    </div>
  );
}

export function Grid() {
  const { grid, moveBlock } = useGrid();

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    const fromIndex = active.data.current?.fromIndex;
    if (typeof fromIndex !== 'number') return;

    const toIndex = Number(String(over.id).replace('cell-', ''));
    if (Number.isNaN(toIndex)) return;

    if (grid[toIndex] === null) {
      moveBlock(fromIndex, toIndex);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid">
        {grid.map((cell, index) => (
          <DroppableCell key={index} index={index} isEmpty={cell === null}>
            {cell ? <DraggableBlock index={index} block={cell} /> : null}
          </DroppableCell>
        ))}
      </div>
    </DndContext>
  );
}