import {useEffect, useRef, useState} from 'react'
import {DateRangePicker} from 'react-date-range'

import format from 'date-fns/format'
import {addDays, getDate} from 'date-fns'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import Wrapper from '../assets/wrappers/dateRange'
import {useAppContext} from '../context/appContext'

const DateRange = () => {
  const {getData} = useAppContext()
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date('Jully 01, 2021'),
      endDate: addDays(new Date('Jully 01, 2021'), 7),
      key: 'selection',
    },
  ])

  // open close
  const [open, setOpen] = useState(false)

  // get the target element to toggle
  const refOne = useRef(null)

  useEffect(() => {
    // event listeners
    document.addEventListener('keydown', hideOnEscape, true)
    document.addEventListener('click', hideOnClickOutside, true)
  }, [])

  const handleChange = (selection) => {
    const startDate = format(selection.startDate, 'yyyy-MM-dd')
    const endDate = format(selection.endDate, 'yyyy-MM-dd')
    getData(startDate, endDate)
    setRange([selection])
  }
  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === 'Escape') {
      setOpen(false)
    }
  }

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false)
    }
  }

  return (
    <Wrapper>
      <div className='calendarWrap'>
        <input
          value={`${format(range[0].startDate, 'MMM dd')} - ${format(range[0].endDate, 'MMM dd, yyyy')}`}
          readOnly
          className='inputBox'
          onClick={() => setOpen((open) => !open)}
        />

        <div ref={refOne}>
          {open && (
            <DateRangePicker
              onChange={(item) => handleChange(item.selection)}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={range}
              months={2}
              direction='vertical'
              className='calendarElement'
            />
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default DateRange
