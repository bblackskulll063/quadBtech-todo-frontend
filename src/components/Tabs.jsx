import React from 'react'
import { TABS } from '../redux/actions/type'
import { useDispatch } from "react-redux";
import { toggleTab } from '../redux/actions';

const Tabs = ({currentTab}) => {
    const dispatch = useDispatch();
    return (
        <div className='d-flex gap-3 mx-2 my-1'>
            {TABS.map((tab, index) => (
                <button key={index} 
                    className={tab === currentTab?' btn btn-secondary':'btn btn-light ouline-none'}
                    onClick={() => dispatch(toggleTab(tab))}
                >
                    
                    {tab}
                </button>
            ))}
        </div>
    )
}

export default Tabs
