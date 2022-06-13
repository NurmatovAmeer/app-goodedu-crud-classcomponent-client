import React, {useEffect, useState} from 'react';
import '../sass/levels.scss'
import axios from "axios";

const initialValue = {
    name:'',
    markForSec:'',
    mark:'',
    markMin:'',
    markMax:''

}

const Levels = () => {

    const [data,setData] = useState(initialValue)
    const [users,setUsers] = useState([])
    const [editData,setEditData] = useState({
        isEdit:false,
        userIndex:null
    })
    const isFilledFields = data.name && data.markForSec && data.mark && data.markMin && data.markMax


    const handleRemove = (index) => {
        setUsers(users.filter((user,userIndex) => userIndex !== index));
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        if (isFilledFields) {
            if (editData.isEdit ){
                const editedData = users;
                editedData.splice(editData.userIndex,1,data);

                setUsers(editedData)
                setEditData({
                    isEdit: false,
                    userIndex: null
                })
            }else {
                setUsers((prevState) => [...prevState,data])
            }
            setData(initialValue)
        }
        handleOpen()
    }


    const handleEdit = (data,index) => {
        setData(data);
        setEditData({
            isEdit: true,
            userIndex: index
        })

        handleOpen()
    }


    const handleClean = () => setData(initialValue)

    // Modal-Sidebar
    // opening codes

    const handleOpen = () => {
      document.getElementById("modal").classList.toggle("d-none")
    }

    const openSideBar = () => {
        document.getElementById("sidebar").classList.toggle("active")
    }

//     useEffect(() => {
//         axios.get("https://api.gooded.xyz/api/level")
//             .then((response) => {
//                 setData(response.data.data.levels)
//             })
//
//
//     },[])
//
// console.log(data)
//
//     const handleDelete = async (_id) => {
//         await axios.delete(`${data}/${_id}`)
//     }


    return (
        <>
            <div className="bar d-flex  align-items-center" onClick={openSideBar}>
            <img src="/images/burger.svg" alt="bar" className="burger"/>
            <h2 className="Poppins" >Levels</h2>
            </div>

            <div className="main">
                <div className="conatiner">
                        <div className="form-actions d-flex justify-content-around">
                        <p className="limit Poppins">Limit:</p>

                        <select className="ui dropdown">
                            <option value="10">10</option>
                            <option value="9">9</option>
                            <option value="8">8</option>
                        </select>

                       <button type="button" className="btn" onClick={handleOpen}>Create</button>

                            <div className="modal-inner d-none" id="modal">
                                <form onSubmit={handleSubmit}>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="#name">Name:</label>
                                        <input type="text" id="name" className="form-control" placeholder="type level name"
                                               onChange={(e) => setData((prevState) => ({
                                            ...prevState,
                                            name:e.target.value
                                        }))}
                                        value={data.name}
                                        />
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="#name">Mark for sec:</label>
                                        <input type="number" id="marksec" className="form-control" placeholder="type mark for second"
                                               onChange={(e) => setData((prevState) => ({
                                            ...prevState,
                                                   markForSec: e.target.value
                                        }))}
                                        value={data.markForSec}
                                        />
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="#name">Mark:</label>
                                        <input type="number" id="mark" className="form-control" placeholder="type mark" onChange={(e) => setData((prevState) => ({
                                            ...prevState,
                                            mark: e.target.value
                                        }))}
                                        value={data.mark}
                                        />
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <label htmlFor="#name">Mark min and max:</label>
                                        <input type="number" id="markmin" className="form-control" placeholder="type mark min" onChange={(e) => setData((prevState) => ({
                                            ...prevState,
                                            markMin: e.target.value
                                        }))}
                                        value={data.markMin}
                                        />
                                        --
                                        <input type="number" id="markmax" className="form-control" placeholder="type mark max" onChange={(e) => setData((prevState) => ({
                                            ...prevState,
                                            markMax: e.target.value
                                        }))}
                                        value={data.markMax}
                                        />
                                    </div>
                                    <button type="submit" className="btn" id="btn-create" disabled={!isFilledFields}>Create</button>
                                    <button type="button" className="btn" id="btn-close" onClick={handleOpen}>Close</button>
                                    <button type="button" className="btn" id="btn-create" onClick={handleClean}>Clean</button>
                                </form>
                            </div>
                        </div>

                     <div className="col-9 level" >

                         <table className="table table-borderless">
                             <thead>
                             <tr className="table-header">
                                 <th>id</th>
                                 <th>Name</th>
                                 <th>Mark for 60 sec</th>
                                 <th>Mark</th>
                                 <th>Acces Mark</th>
                                 <th>Actions</th>
                             </tr>
                             </thead>
                                               <tbody>

                                               {users.map((user,index) => {
                                                   return(
                                                       <tr className="levels" key={user.name}>
                                                           <td className="id">{index + 1}</td>
                                                           <td className="levels-name">
                                                               {user.name}
                                                           </td>
                                                           <td className="levels-mark-sec d-flex">
                                                               {user.markForSec}
                                                           </td>
                                                           <td className="levels-mark">
                                                               {user.mark}
                                                           </td>
                                                           <td className="levels-access">
                                                               {user.markMin}--{user.markMax}
                                                           </td>
                                                           <td className="levels-actions d-flex justify-content-around">
                                                               <button type="button" className="btn"><img src="/images/edit.svg" alt="edit" onClick={() => handleEdit(user,index)}/></button>
                                                               <button type="button" className="btn" ><img src="/images/delete.svg" alt="delete"  onClick={() => handleRemove(index)}/></button>
                                                           </td>
                                                       </tr>
                                                   )
                                               })}

                                               </tbody>

                         </table>
                        <div className=" d-flex align-items-center justify-content-around">
                            <p>1 of 1</p>
                            <button type="button" className="btn"> &#8701; </button>
                            <button type="button" className="btn"> &#8702; </button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Levels;
