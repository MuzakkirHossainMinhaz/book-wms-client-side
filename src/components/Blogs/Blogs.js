import React from 'react';
import { Card, Container, Table } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container className='my-4 text-start'>
            {/* Question 01 */}
            <Card variant="light" className='mb-3'>
                <Card.Header className='fs-4 fw-bold'>Difference between <span className='bg-white bg-gradient font-monospace px-1 rounded-2'>javascript</span> and <span className='bg-white bg-gradient font-monospace px-1 rounded-2'>nodejs</span></Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Javascript</th>
                                <th>NodeJS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Javascript is a programming language that is used for writing scripts on the website.</td>
                                <td>NodeJS is a Javascript runtime environment.</td>
                            </tr>
                            <tr>
                                <td>Javascript can only be run in the browsers.</td>
                                <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                            </tr>
                            <tr>
                                <td>It is basically used on the client-side.</td>
                                <td>It is mostly used on the server-side.</td>
                            </tr>
                            <tr>
                                <td>Javascript is capable enough to add HTML and play with the DOM.</td>
                                <td>Nodejs does not have capability to add HTML tags.</td>
                            </tr>
                            <tr>
                                <td>Javascript is used in frontend development.</td>
                                <td>Nodejs is used in server-side development.</td>
                            </tr>
                            <tr>
                                <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc.</td>
                                <td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.</td>
                            </tr>
                            <tr>
                                <td>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.</td>
                                <td>Nodejs is written in C, C++ and Javascript.</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            {/* Question 02 */}
            <Card variant="light" className='mb-3'>
                <Card.Header className='fs-4 fw-bold'>Difference between <span className='bg-white bg-gradient font-monospace px-1 rounded-2'>sql</span> and <span className='bg-white bg-gradient font-monospace px-1 rounded-2'>nosql</span> databases.</Card.Header>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>SQL</th>
                                <th>NoSQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).</td>
                                <td>Non-relational or distributed database system.</td>
                            </tr>
                            <tr>
                                <td>These databases have fixed or static or predefined schema.</td>
                                <td>They have dynamic schema.</td>
                            </tr>
                            <tr>
                                <td>These databases are not suited for hierarchical data storage.</td>
                                <td>These databases are best suited for hierarchical data storage.</td>
                            </tr>
                            <tr>
                                <td>These databases are best suited for complex queries.</td>
                                <td>These databases are not so good for complex queries.</td>
                            </tr>
                            <tr>
                                <td>Vertically Scalable.</td>
                                <td>Horizontally scalable.</td>
                            </tr>
                            <tr>
                                <td>Follows ACID property.</td>
                                <td>Follows CAP(consistency, availability, partition tolerance).</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
            {/* Question 03 */}
            <Card variant="light" className='mb-3'>
                <Card.Header className='fs-4 fw-bold'>What is the purpose of <span className='bg-white bg-gradient font-monospace px-1 rounded-2'>jwt</span> and how does it work?</Card.Header>
                <Card.Body>
                    <Card.Title>What is the purpose of jwt?</Card.Title>
                    <Card.Text>
                        <p>The Purpose of JWT is <em>Stateless Authentication</em>.</p>
                        <h6>Stateless Authentication</h6>

                        <p>Stateless authentication describes a system/process that enables its components to decentrally verify and introspect tokens. This ability to delegate token verification allows us to (partly) get rid of the direct coupling to a central token overlord and in that way enables state transfer for authentication. Having worked in stateless authentication environments for several years, the benefits in my eyes are clearly:</p>

                        <ul>
                            <li>Less latency through local, decentralized token verification,</li>
                            <li>Custom authorization fallbacks due to local token interpretation,</li>
                            <li>Increased resilience by removed network overhead.</li>
                        </ul>
                        
                        <p>Also, stateless authentication is able to absolve from the need to keep track of issued tokens, and for that reason removes state (and hence reduces storage) dependencies from your system.</p>

                    </Card.Text>
                    <Card.Title>How does it work?</Card.Title>
                    <Card.Text>
                        <p>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>

                        <div>
                            Once decoded, you will get two JSON strings:
                            <ol>
                                <li>The header and the payload</li>
                                <li>The signature</li>
                            </ol>
                        </div>

                        <p>The JOSE <strong>header</strong> contains the type of token — JWT in this case — and the signing algorithm.</p>

                        <p>The <strong>payload</strong> contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.</p>

                        <p>The <strong>signature</strong> ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Blogs;