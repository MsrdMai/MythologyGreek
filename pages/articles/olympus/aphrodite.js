import DocumentsLayout from '../../../components/DocumentsLayout'

const Aphrodite = () => {
    const host = "http://10.0.15.12/wtprojects/wtpg24/static/images/"
    const Aphrodite2 = host + "olyp/Aphrodite2.jpg"
    const Aphrodite = host + "olyp/Aphrodite.jpg"
    const Aphrodite3 = host + "olyp/Aphrodite3.jpg"
    return (
        <DocumentsLayout>
            <h3 className="text-center" style={{ marginTop: 130 }}>เทพีอะโพร์ไดท์</h3>
            <p className="ml-3">  เทพีอะโพรไดท์หรือเทพีวีนัส เป็นเทพีแห่งเทพปกรณัมโรมันที่มีความเกี่ยวข้องโดยตรงกับ<b>ความรักและความงาม</b>
            พระนางเป็นชายาของเทพวัลคัน (Vulcan) หรือเฮฟเฟสตุสเทพแห่งงานช่าง เทพีวีนัสตามตำราว่าเกิดขึ้นเองจากฟองทะเล ด้วยพระนามของพระนาง อะโฟรไดท์
             นั้น มาจากคำว่า ‘Aphros’ ที่แปลว่าฟอง ซึ่งมีตำนานว่าพระนางเกิดในทะเลใกล้เกาะไซเธอรา และถูกคลื่นซัดไปยังเกาะไซปรัส 
             </p>
            <img className="img-doc" src={Aphrodite2} alt="Aphrodite2" />


            <p className="ml-3">แต่บางตำราว่าเป็นธิดาของเทพซุสที่เกิดจากจากนางอัปสรไดโอนี แต่ที่ตรงกันคือพระนางมีความงดงามที่ไม่มีใครเทียมได้แม้กระทั่งเทพธิดาด้วยกัน
             และสามารถสะกดใจผู้ชายทุกคนได้ภายในพริบตาแรกที่มองเห็นพระนาง อีกทั้งพระนางก็ชอบใจในความสวยงามของตนเองมากเสียด้วย 
             พระนางจึงไม่ยอมเด็ดขาดหากใครจะกล้าล้ำเส้นเทพีความงามของพระนาง ด้วยแรงริษยาที่รุนแรงพอๆกับรูปโฉมสะสวยทำให้เทพีวีนัสเป็นที่หวาดหวั่นของเทพหลายๆองค์</p>

            <img className="img-doc" src={Aphrodite} alt="Aphrodite" />
            <p className="ml-3">          ในวันแรกที่เทพีวีนัสปรากฏตัวบนเขาโอลิมปัส เทพชายทุกองค์โดยเฉพาะเทพซุสเองก็อยากได้พระนางมาครอบครอง แต่เทพีวีนัสไม่ใช่หญิงสาวเรียบร้อยหัวอ่อนว่าง่าย 
            ทำให้เทพซุสเกิดความโมโหและแก้เผ็ดพระนาง โดยจับพระนางแต่งงานกับเทพวัลแคนพระโอรสของพระองค์ ซึ่งเทพวัลแคนชอบขลุกอยู่ในโรงงาน 
            ก่อสร้าง และประดิษฐ์สิ่งต่างๆเนื้อตัวมอมแมม แถมยังเป็นเทพขาเป๋ ทำให้เทพีวีนัสโกรธเคืองอย่างมาก แต่พระนางก็กล้าทำในสิ่งที่เทพีอื่นๆ ไม่กล้า นั่นคือการคบชู้สู่ชายแบบตามใจชอบ</p>
            <img className="img-doc" src={Aphrodite3} alt="Aphrodite3" />
        </DocumentsLayout>
    )
}

export default Aphrodite
