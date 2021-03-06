import { useQuery } from "@apollo/react-hooks"
import { useRouter } from "next/router"
import { gql } from "apollo-boost"

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap"

const GET_RESTAURANT_DISHES = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`

function Restaurants(props) {
  const router = useRouter()
  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: router.query.id },
  })

  if (error) return "Error Loading Dishes"
  if (loading) return <h1>Loading ...</h1>
  if (data.restaurant) {
    const { restaurant } = data
    return (
      <>
        <h1>{restaurant.name}</h1>
        <Row>
          {restaurant.dishes.map((res) => (
            <Col
              xs="6"
              sm="4"
              style={{ padding: 0 }}
              key={res.id}
              className="col-lg-4 col-sm-6 col-12 d-flex align-items-stretch"
            >
              <Card style={{ margin: "0 10px" }}>
                <CardImg
                  top={true}
                  width="100%"
                  src={`${process.env.NEXT_PUBLIC_API_URL}${res.image[0].url}`}
                />
                <CardBody>
                  <CardTitle>{res.name}</CardTitle>
                  <CardText>{res.description}</CardText>
                </CardBody>
                <div className="card-footer">
                  <Button outline color="primary">
                    + Add To Cart
                  </Button>

                  <style jsx>
                    {`
                      a {
                        color: white;
                      }
                      a:link {
                        text-decoration: none;
                        color: white;
                      }
                      .container-fluid {
                        margin-bottom: 30px;
                      }
                      .btn-outline-primary {
                        color: #007bff !important;
                      }
                      a:hover {
                        color: white !important;
                      }
                    `}
                  </style>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </>
    )
  }
  return <h1>Add Dishes</h1>
}
export default Restaurants
