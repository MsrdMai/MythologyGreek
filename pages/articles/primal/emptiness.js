import DocumentsLayout from "../../../components/DocumentsLayout"

const Emptiness = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const khaos = host + "emptin/Khaos-1.jpg"
    const erebus = host + "emptin/Erebus.jpg"
    const nox3 = host + "emptin/nox3.jpg"
    const aether = host + "emptin/Aether.jpg"
    const hermera = host + "emptin/hermera.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{ marginTop: 130 }}>เทพเจ้าแห่งความว่างเปล่า</h3>

            <img className="img-doc" src={khaos} alt="Khaos-1" />
            <p className="ml-3"> ก่อนที่โลกกลมๆใบนี้จะเกิดขึ้นนั้น มีเทพองค์หนึ่งนามว่า<b> เคออส </b>(อังกฤษ: Chaos หรือ Khaos) เทพเจ้าแห่งความว่างเปล่า
            เป็นสภาพแรกเริ่มของการมีอยู่อันเป็นต้นกำเนิดของเหล่าทวยเทพรุ่นแรก หรืออีกนัยหนึ่งก็คือความว่างเปล่าอันมืดดำของอวกาศ  </p>

            <p className="ml-3">ในบทกลอนเมตามอร์โฟเซส (Metamorphoses) กวีโอวิด (Ovid) ได้อธิบายเคออสว่าเป็น
            "มวลหยาบและยังไม่สมบูรณ์ กลุ่มก้อนที่ไม่มีชีวิต ไม่มีรูปแบบ ไม่มีขอบเขต ของเมล็ดพันธุ์อันยุ่งเหยิง และเคออสก็ได้รับสมญาอันเหมาะสม"
            ด้วยเหตุนี้ คำว่า "chaos" จึงถูกนำมาใช้ในปัจจุบันโดยมีความหมายว่า <b>"ความสับสนอย่างสิ้นเชิง" </b></p>
            <p className="ml-3">เทพเคออส เทพเจ้าแห่งความว่างเปล่า ทุกที่ก่อนที่จะมีจักรวาล โลก สวรรค์ บาดาล นรก นั่นที่อย่างมันว่างเปล่าไปหมด
            ไม่มีอะไรเลย  ลักษณะสำคัญของเคออสมีสามประการหลัก คือ เคออสเป็นหลุมลึกไร้ก้นที่ซึ่งหากมีอะไรตกลงไปก็จะตกลงไปเรื่อยๆ ไม่มีสิ้นสุด
             ซึ่งตรงข้ามกับโลก (Earth) อย่างมาก ด้วยโลกกำเนิดออกมาจากความว่างเปล่านี้ แต่โลกประกอบด้วยพื้นดิน เคออสเป็นสถานที่ที่ปราศจากทิศทางที่แน่นอน
             โดยสิ่งต่างๆ จะตกไปตามทิศทางต่างๆ ได้รอบ เคออสเป็นพื้นที่ว่างที่แยกโลก (Earth) และท้องฟ้า (Sky) ออกจากกัน และเคออสก็ยังคงสภาพคั่นกลางสองสิ่งนั้น </p>
            <p className="ml-3">และแล้วท่านก็ได้ให้กำเนิดเทพเจ้าทั้ง 2 พระองค์ ซึ่งเป็น<b>เทพเจ้าแห่งความมืด คือ เทพเอเรบัส (Erebus)
            และ เทพีนิกซ์ เทพเจ้าแห่งกลางคืน (Nyx/Night) </b> </p>
            <img className="img-doc" src={erebus} alt="Erebus" />
            <img className="img-doc" src={nox3} alt="nox3" />
            <p className="ml-3">ซึ่งทั้งสองก็ให้กำเนิดพระโอรสพระธิดาเป็น<b>เทพเจ้าแห่งแสงสว่าง คือ
            เทพเอเธอร์ (Aether) และ เทพีเฮเมรา (Hermera) ซึ่งทำให้เห็นทุกอย่าง</b> และเทพเอเรบัส และ เทพีนิกซ์ก็ลาจากพระโอรส พระธิดา
            และฝากหน้าที่อันยิ่งใหญ่ให้แก่พระบุตรทั้งสอง </p>
            <img className="img-doc" src={aether} alt="Aether" />
            <img className="img-doc" src={hermera} alt="hermera" />
            <p className="ml-3">พระองค์ยังมีพระโอรส พระธิดาด้วยกันอีก 8 พระองค์ </p>
            <div className="ml-4">
                <p> - เทพโมรอส เทพเจ้าแห่งโชคชะตา</p>
                <p> - เทพฮีพโนส เทพเจ้าแห่งนิทรา</p>
                <p> - เทพโอนีอีรัว เทพเจ้าแห่งความฝัน</p>
                <p> - เทพเนเมสิส เทพเจ้าแห่งการล้างแค้น</p>
                <p> - เทพทานาทอส เทพเจ้าแห่งความตาย</p>
                <p> - เทพีเซอร์ เทพีแห่งความตายที่สยดสยอง</p>
                <p> - เทพโมมัส เทพเจ้าแห่งการค้นหาความผิด</p>
                <p> - เทพชารอน ผู้แจวเรือส่งวิญญาณคนตายแห่งลุ่มแม่น้ำสติกซ์</p>
            </div>
        </DocumentsLayout>
    )
}

export default Emptiness