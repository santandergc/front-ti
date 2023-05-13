import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Navbar from "./navbar";
import Col from "react-bootstrap/Col";
import axios from "axios";


function WarehouseDetails({ bodegas }) {
  console.log(bodegas)
  return (
    
    <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://img.freepik.com/free-vector/industrial-buildings-isometric-composition-with-fabric-storage-shed-set-trucks-with-containers-boxes_1284-31602.jpg?w=2000" />
        <Card.Body>
          <Card.Title>{bodegas[1][0]._id}</Card.Title>
          <Card.Text>
          usedSpace: {bodegas[1][0].usedSpace}
          </Card.Text>
          <Card.Text>
          totalSpace: {bodegas[1][0].totalSpace}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/02/38/54/27/360_F_238542727_NW615u1wVMubefUtUb7OqFV8DfM3jAZx.jpg" />
        <Card.Body>
          <Card.Title>{bodegas[1][1]._id}</Card.Title>
          <Card.Text>
          usedSpace: {bodegas[1][1].usedSpace}
          </Card.Text>
          <Card.Text>
          totalSpace: {bodegas[1][1].totalSpace}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://img.freepik.com/free-vector/modern-kitchen-interior-background-template-cartoon-dinner-room-with-furniture_33099-131.jpg" />
        <Card.Body>
          <Card.Title>{bodegas[1][2]._id}</Card.Title>
          <Card.Text>
          usedSpace: {bodegas[1][2].usedSpace}
          </Card.Text>
          <Card.Text>
          totalSpace: {bodegas[1][2].totalSpace}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function WarehouseIngredients({ bodeg }) {
  const bodegas = bodeg[0]
  console.log('bodegas', bodegas)
  const bodega_uno = bodeg[1][0]._id
  const datosFiltrados1 = bodegas.filter(dato => dato.store === bodega_uno);
  console.log(datosFiltrados1)
  console.log(bodega_uno)
  const datosFiltradosUno =  datosFiltrados1.map(dato => ({sku: dato.sku, quantity: dato.quantity}));

  const bodega_dos = bodeg[1][1]._id
  const datosFiltrados2 = bodegas.filter(dato => dato.store === bodega_dos);
  console.log(datosFiltrados2)
  console.log(bodega_dos)
  const datosFiltradosDos =  datosFiltrados2.map(dato => ({sku: dato.sku, quantity: dato.quantity}));

  const bodega_tres = bodeg[1][2]._id
  const datosFiltrados3 = bodegas.filter(dato => dato.store === bodega_tres);
  const datosFiltradoTres =  datosFiltrados3.map(dato => ({sku: dato.sku, quantity: dato.quantity}));

  const ingredients = [datosFiltradosUno, datosFiltradosDos, datosFiltradoTres]

  console.log(ingredients)

  return (
    <div className="container">
  {ingredients.map((ingredientList, index) => (
    <div key={index} className="row">
      <div className="col">
        <h3 className="h3">Bodega {index+1}</h3>
        <ListGroup className="list-group">
          {ingredientList.map((ingredient, i) => (
            <ListGroup.Item key={i}>
              SKU: {ingredient.sku} | Quantity: {ingredient.quantity}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <br />
      <br />
    </div>
    
  ))}
</div>

  )
}



function Warehouse() {
  const [bodegas, setBodegas] = useState([]);

  useEffect(() => {
    const getwarehouses = async () => {
      try {
        const response = await axios.get("http://lagarto30.ing.puc.cl/stocks/inventory");
        setBodegas(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getwarehouses();
  }, []);

  // console.log(bodegas);

  return (
    <div>
      <Navbar/>
      <div style={{backgroundImage: 'url("https://images.pexels.com/photos/1310777/pexels-photo-1310777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', backgroundSize: 'cover', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <h1 style={{color: 'white', fontSize: '4rem'}}>Dashboard</h1>
      </div>
      <br />
      <br />
      {bodegas.length > 0 && <WarehouseDetails bodegas={bodegas} />}
      <br />
      <br />
      {/* <WarehouseIngredients bodegas={bodegas[0]} /> */}
      {bodegas.length > 0 && <WarehouseIngredients bodeg={bodegas} />}
        
    </div>
  
  );
}

export default Warehouse;
