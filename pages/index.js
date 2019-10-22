import Layout from '../components/Layout'

const Home = () => {
    return (
        <Layout page="index">
            <section className="about full-screen d-lg-flex justify-content-center align-items-center" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 col-12 d-flex align-items-center">
                            <div className="about-text">
                                <small className="small-text">ยินดีต้อนรับสู่เว็ปไซต์ <span className="mobile-block">ตำนานเทพกรีก - Mythology Greek</span></small>
                                <h1 className="animated animated-text">
                                    <span className="mr-2">หัวข้อที่น่าสนใจ</span>
                                    <div className="animated-info">
                                        <span className="animated-item">ปฐมตำนานแห่งจักรวาล</span>
                                        <span className="animated-item">โอลิมปัส สวรรค์แห่งเทพเจ้า</span>
                                        <span className="animated-item">ตำนานดวงดาวและราศี</span>
                                    </div>
                                </h1>
                                <p className="mt-5">ตำนานเทพเจ้ากรีก เป็นเรื่องปรัมปราที่เกี่ยวข้องกับเทพเจ้า ในศาสนากรีซโบราณ เพื่อเป็นวิถีปฏิบัติทางศาสนา โดยอธิบายถึงการกำเนิดของโลก และการใช้ชีวิต ผ่านการผจญภัยของเหล่าเทพ เทพี วีรบุรุษ และวีรสตรี รวมถึงสิ่งมีชีวิตอื่น ๆ ซึ่งเผยแพร่ผ่านทางบทกวีในแบบปากต่อปาก และกลายเป็นที่รู้จักกันอย่างแพร่หลายในวรรณกรรมกรีก</p>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 col-12">
                            <div className="about-image svg">
                                <img src="./static/images/dog.jpg" className="img-fluid" alt="svg image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>

    )
}

export default Home