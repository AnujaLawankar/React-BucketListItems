import React, { useState } from 'react';

function BucketForm() {


};

return !props.edit ? (

    <div>
        <form>
            <input
                type='text'
                placeholder='Work add to your bucket list'
                value={input}
                name='text'
                className='bucket-input'
                onChange={handleChange} >
            </input>
            <div className='dropdown'>
                <button className={'dropbtn ${eagerness}'}>
                    {eagerness || 'Priority'}

                </button>


                <div className='dropdown-content'>
                    <p onClick={() => setEagerness(eagernessLevel[0])}>MustDo</p>
                    <p onClick={() => setEagerness(eagernessLevel[1])}>Want to do</p>
                    <p onClick={() => setEagerness(eagnernessLevel[2])}>Take it or leave it</p>
                </div>
            </div>
            <button className='bucket-button'>Add bucket list item
            </button>

        </form>
    </div >

) : (

    <div>
        <h3> Update Entry: {props.edit.value}</h3>
        <form className='bucket-form' onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={props.edit.value}
                value={input}
                name="text"
                className="bucket-input"
                onChange={handleChange}
            ></input>
            <div className="dropdown">
                <button className={`dropbtn ${eagerness}`}>
                    {eagerness || 'Priority'}
                </button>
                <div className="dropdown-content">
                    <p onClick={() => setEagerness(eagernessLevel[0])}>Must do</p>
                    <p onClick={() => setEagerness(eagernessLevel[1])}>Want to do</p>
                    <p onClick={() => setEagerness(eagernessLevel[2])}>Take it or leave it</p>
                </div>
            </div>
            <button className="bucket-button">Update</button>
        </form>
    </div>
)
