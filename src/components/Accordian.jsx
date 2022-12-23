// external imports
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

// local imports
import Wrapper from '../assets/wrappers/accordian'
import { useAppContext } from '../context/appContext'

const Accordian = () => {
  const { columnSequence, changeSequence } = useAppContext()

  // handle drag sequence
  const handleSequence = (result) => {
    console.log(result)
    const reArrangeColumns = [...columnSequence]

    const [reArrange] = reArrangeColumns.splice(result.source.index, 1)
    reArrangeColumns.splice(result.destination.index, 0, reArrange)
    changeSequence(reArrangeColumns)
  }
  return (
    <Wrapper className='acc-content'>
      <h3>Dimensions and Metrics</h3>
      <DragDropContext onDragEnd={handleSequence}>
        <Droppable droppableId='columnSequence' direction='horizontal' type='column'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {columnSequence.map((column, i) => (
                <Draggable draggableId={`column-${i}`} key={i} index={i}>
                  {(provided) => (
                    <span {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                      {column}
                    </span>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Wrapper>
  )
}

export default Accordian
