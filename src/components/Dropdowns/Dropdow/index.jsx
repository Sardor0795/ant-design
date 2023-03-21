import React from 'react'
import { SelectBtn, SelectDropDownWrapper, SelectImgWrapper, SelectItem } from './style'

export const DropDown = ({ children,...res}) => {
  return (
    <SelectBtn {...res}>
        {children ? children : 'Select'}
        <SelectImgWrapper>
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="KeyboardArrowDownIcon" className="StyledIconBase-ea9ulj-0 iKhrnw"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg>
        </SelectImgWrapper>

            <SelectDropDownWrapper>
                <SelectItem>Option 1 option 1 to see</SelectItem>
                <SelectItem>Option 2</SelectItem>
                <SelectItem subOption>Sub Option 2</SelectItem>
                <SelectItem subOption>Sub Option danger</SelectItem>
                <SelectItem>Option danger</SelectItem>
                <SelectItem>Option disabled</SelectItem>
            </SelectDropDownWrapper>

    </SelectBtn>
  )
}
