// external imports
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

// local imports
import Wrapper from '../assets/wrappers/accordian'
import { useAppContext } from '../context/appContext'

const Accordian = () => {
  const { columnSequence, changeSequence, visibleColumns, handleChange } = useAppContext()
  //   const { Date, App, Requests, Responses, Impressions, Clicks, Revenue, Fill_rate, CTR } = visibleColumns

  //   toggle visibility
  const handleClick = (e) => {
    const name = e.target.id
    if (name === 'date' || name === 'app_id') return
    const value = visibleColumns[e.target.id] ? false : true
    handleChange({ name, value })
  }

  // handle drag sequence
  const handleSequence = (result) => {
    const reArrangeColumns = [...columnSequence]

    const [reArrange] = reArrangeColumns.splice(result.source.index, 1)
    reArrangeColumns.splice(result.destination.index, 0, reArrange)
    changeSequence(reArrangeColumns)
  }
  return (
    <Wrapper className='acc-content'>
      <p>Dimensions and Metrics</p>
      <DragDropContext onDragEnd={handleSequence}>
        <Droppable droppableId='columnSequence' direction='horizontal' type='column'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {columnSequence.map((column, i) => (
                <Draggable draggableId={`column-${i}`} key={i} index={i}>
                  {(provided) => (
                    <span
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      id={column}
                      className={visibleColumns[column] ? 'active' : ''}
                      ref={provided.innerRef}
                      onClick={handleClick}
                    >
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
