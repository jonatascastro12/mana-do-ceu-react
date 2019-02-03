import React, {Component} from 'react';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import './About.css';

class About extends Component {
    render() {
        return (
            <div className="h-100">
                <div className="wrapper">
                    <div className="text-center">
                        <Header/>
                    </div>
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-6">
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/4o6BwaybOjw"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen></iframe>
                            </div>
                            <div className="col-6">
                                <p>O Maná do Céu é um projeto de devocionais diários
                                    disponíveis em mídias onlines.</p>
                                <p>O projeto surgiu depois de
                                    vários anos que o Pr. Eli Vilela decidiu compartilhar mensagens de palavras
                                    diárias. As mensagens eram compartilhadas por mensagens de celular e redes sociais.
                                    Foi
                                    então que seu filho teve a ideia de criar um site para que essas mensagens pudessem
                                    ter
                                    maior visibilidade.</p>
                                <p>A irmã do Pr. Eli, que já recebia as mensagens
                                    diariamente, apelidou-as de "Maná". Esse termo
                                    refere-se às provisões que alimentaram o povo de Israel durante o
                                    período no deserto. O Senhor fazia cair do céu o Maná.</p>
                                <p>Todos os dias, uma nova mensagem será postada.</p>
                                <p><em>Nem só de pão viverá o homem, mas de toda a palavra que sai da boca de Deus.</em>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>

            </div>
        );
    }
}

export default About;