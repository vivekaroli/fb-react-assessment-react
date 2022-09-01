import React, { useEffect, useState } from 'react';
import CardView from './CardView';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'

const Movies = (props) => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        fetchData()

    }, [])

    const fetchData = async () => {
        let result = await axios.get("http://localhost:4000/getMovies")

        setMovies(result.data)
    }

    return (<>
        <Container>
            <Row>
                {movies && movies.map((movie, index) => (
                    <Col lg="4" key={"col" + index}>
                        <CardView key={"movie" + index} movie={movie} />
                    </Col>

                ))}
            </Row>
        </Container>

    </>
    )
}
export default Movies