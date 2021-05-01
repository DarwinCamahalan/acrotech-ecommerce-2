import React, { useState, useEffect } from 'react'
import './styles.scss'
const Popup = () => {
  const [popupStart, setPopupStart] = useState()
  useEffect(() => {
    setPopupStart(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeOverlay = () => {
    document.body.style.overflow = 'unset'
    setPopupStart(!popupStart)
  }
  return (
    <div>
      {popupStart && (
        <div className="overlay-close" onClick={closeOverlay}></div>
      )}
      {popupStart ? (
        <div className="announcement">
          <div className="close" onClick={closeOverlay}>
            X
          </div>
          <div className="content">
            <h1>Announcements</h1>
            <ul>
              <li>
                <p>
                  <strong>Announcement 1 : </strong>Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Incidunt repellat recusandae
                  omnis qui consectetur eaque accusamus at fugit facilis
                  mollitia! Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Ullam, molestias. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Incidunt, earum!
                </p>
              </li>
              <li>
                <p>
                  <strong>Announcement 2 : </strong>Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Aperiam non voluptatibus
                  tenetur dolor inventore! Accusamus dignissimos, et dolorum
                  voluptate obcaecati aspernatur iure ipsum eos dicta. Inventore
                  explicabo recusandae commodi cum. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Officia obcaecati molestiae,
                  dolor perspiciatis nisi sapiente. Itaque aliquam consectetur
                  rerum asperiores?
                </p>
              </li>
              <li>
                <p>
                  <strong>Announcement 3 : </strong>Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Illum, adipisci exercitationem
                  mollitia accusantium, nesciunt tenetur aperiam incidunt unde
                  doloremque libero enim perferendis minima consequuntur officia
                  sapiente eos. Dolorum, ipsam dicta exercitationem aut sit,
                  expedita omnis iste, deserunt fugiat est hic. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit. Nam reiciendis
                  repudiandae itaque possimus explicabo quibusdam! Ducimus
                  dolorem reiciendis consectetur beatae, at voluptatem quia
                  inventore odio laudantium amet esse dolorum culpa commodi cum
                  adipisci. Corrupti esse numquam reprehenderit eius ab quisquam
                  nihil rem labore. Ex eum, animi sequi nam tenetur fuga.
                </p>
              </li>
              <li>
                <p>
                  <strong>Announcement 4 : </strong>Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Dolore, enim. Lorem ipsum, dolor
                  sit amet consectetur adipisicing elit. Numquam odit eligendi
                  expedita. Dolorem aspernatur perspiciatis aliquid quaerat
                  soluta obcaecati, eveniet id doloremque dolorum nam iusto
                  asperiores fuga iure tempore eaque libero nisi debitis.
                  Aspernatur a quidem ipsam reiciendis placeat inventore dicta
                  distinctio odio, eos itaque nesciunt accusantium tempora
                  possimus ducimus vel consectetur dolores facere quae nemo
                  eaque numquam quasi iste? Quidem reprehenderit repellat
                  tenetur magnam necessitatibus consequuntur doloribus fugit
                  fuga reiciendis nisi, cumque maiores iusto, nemo eum
                  blanditiis eligendi. Modi doloremque nisi error vel qui
                  possimus, cupiditate neque explicabo necessitatibus incidunt?
                  Vitae impedit quae dolor necessitatibus natus explicabo, fugit
                  voluptate.
                </p>
              </li>
              <li>
                <p>
                  <strong>Announcement 5 : </strong>Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Officia ex quaerat voluptatum
                  qui beatae consequatur fuga, veritatis excepturi quasi quis.
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Suscipit, voluptate in culpa tenetur rem nemo. Cupiditate
                  pariatur est quo provident tenetur alias repellendus.
                  Voluptates, aut nihil! Nemo libero exercitationem dolorem
                  accusamus fuga in officiis ad, neque illum magnam quibusdam
                  perspiciatis iusto repellat optio beatae non quae laboriosam!
                  Molestiae tenetur quam magni quod perspiciatis explicabo
                  similique, quo, laboriosam earum iste sit voluptatibus
                  doloremque aliquam hic quis eum ut nihil qui deleniti quia sed
                  molestias harum ea. Cum vero autem optio, totam repellat
                  maxime, facere voluptates placeat perspiciatis, delectus
                  excepturi rem? Natus, eos molestiae! Saepe autem harum
                  voluptatum error, a at quibusdam minima excepturi maxime amet
                  rem accusamus ipsa. Magni voluptate ad, fugit perferendis
                  quaerat sequi corporis mollitia, sunt odio consequatur dolor
                  voluptatibus, a quisquam repudiandae deleniti. Fugiat deleniti
                  adipisci rerum laboriosam neque cupiditate reprehenderit
                  corrupti sit et animi enim repellat quia reiciendis
                  necessitatibus voluptatibus accusamus, iste voluptates
                  inventore atque pariatur totam voluptatem temporibus, suscipit
                  recusandae. Mollitia corporis illum ipsam! Debitis adipisci
                  quisquam optio exercitationem. Voluptatem sapiente enim,
                  assumenda molestiae at qui quod velit dolorum mollitia ipsam
                  fugit iusto ratione magni veniam sint est dolor repellat
                  dolorem molestias provident ipsa aspernatur ad iste tenetur.
                  Id ducimus debitis eveniet, pariatur magnam laudantium
                  aliquam!
                </p>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  )
}

export default Popup
