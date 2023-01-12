import { useState, useEffect } from "react";
import axios from "axios"
import Counter from "./Counter";

export default function Card() {

    const [ card, setCard ] = useState('')
    const [checked, setChecked] = useState([]);

    const getAllProduct = () => {
        axios.get('http://localhost:3000/products')
            .then((res) => {
                console.log(res.data);
                setCard(res.data)
            })
            .catch( err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getAllProduct();
    },[]);

    const handleCheck = (e) => {
    }

    return(
        <> 
            <div class="form-check ml-1" style={{ marginLeft: "4px" }}>
                <input 
                    className="form-check-input"
                    type="checkbox" 
                    name="allSelect"
                    onChange={handleCheck}
                    style={{ width: "25px", height: "25px" }} 
                />
                <label class="form-check-label h3" style={{ marginLeft: "18px" }}>
                    Pilih Semua
                </label>
            </div>
            <div className="row">
                <div className="col-8">
                    { card ? 
                        card.map( card => {
                            return(
                                <div className="d-flex p-1"> 
                                    <div className="d-flex">
                                        <div className="form-check" style={{ marginRight: "10px" }}>
                                            <input 
                                                className="form-check-input" 
                                                type="checkbox"
                                                onChange={handleCheck} 
                                                style={{ width: "25px", height: "25px" }} 
                                            />
                                        </div>
                                        <div className="card d-flex" style={{ width: "40rem" }}>
                                            <div className="row">
                                                <div className="col-4">
                                                    <img src={ card.image } className="card-img-top" alt={ card.name } height={200}/>
                                                </div>
                                                <div className="col-8">
                                                    <div className="card-body">
                                                        <h5 className="card-title">{ card.name }</h5>
                                                        <p className="card-text">{ card.desc }</p>
                                                        <div className="row">
                                                            <div className="col-8">
                                                                <h6 className="card-text">Rp{ card.price }</h6>
                                                            </div>
                                                            <div className="col-4">
                                                                <Counter />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) : <h3>No data yet</h3>
                    } 
                </div>

                {/* Price List */}
                <div className="col-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Ringkasan Belanja</h5>
                            <div className="row">
                                <div className="col-9">
                                    <h6 className="card-subtitle mb-2 text-muted">Total Harga (0 Barang)</h6>
                                </div>
                                <div className="col-3">
                                    <h6 className="card-subtitle mb-2 text-muted">Rp0</h6>
                                </div>
                            </div>
                            <hr />
                            <div className="row mb-3">
                                <div className="col-9">
                                    <h6 className="card-subtitle mb-2 text-muted">Total Harga</h6>
                                </div>
                                <div className="col-3">
                                    <h6 className="card-subtitle mb-2 text-muted">-</h6>
                                </div>
                            </div>
                            <div className="d-grid gap-2">
                                <button className="btn btn-success">Beli (0)</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}