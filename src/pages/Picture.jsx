import CameraPhoto, { FACING_MODES } from 'jslib-html5-camera-photo';
import { Upload, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Loading } from '../components';

const Home = () => {
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [load, setLoad] = useState(false);
  const videoRef = useRef(null)
  const inputRef = useRef(null)
  const navigate = useNavigate();

  useEffect(() => {
    let camera = null;
    if(videoRef.current) {
        camera = new CameraPhoto(videoRef.current);
        camera.startCamera(FACING_MODES.USER);
        
        setCamera(camera);
    }

  }, [videoRef]);

  const takePhoto = () => {
    const config = {
        sizeFactor: 1,
        isImageMirror : true
    };
    setImage(camera.getDataUri(config));
  }

  const startDiagnosis = () => {
    setLoad(true);
    localStorage.setItem('image', image);
    navigate("/diagnose");
  }

  const handleUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  }

  return (
    <div className=" relative">
        <Loading load={load} />
        <div className="fixed top-0 left-0 p-6 z-20">
            <Link to="/home">
                <div className="h-[40px] w-[40px] rounded-full bg-black bg-opacity-40 flex-center text-white">
                    <X />
                </div>
            </Link>
        </div>

        <video ref={videoRef} className="h-screen w-screen bg-black object-cover" style={{transform: 'rotateY(180deg)'}} autoPlay></video>

        <div className="absolute bottom-0 left-0 w-full flex-center p-6">
            <div onClick={takePhoto} className="h-[90px] w-[90px] border-2 border-red-400 rounded-full flex-center">
                <div className="h-[90%] w-[90%] rounded-full bg-white"></div>
            </div>
        </div>

        {image &&
            <div className="absolute top-0 left-0 z-30">
                <div className="h-screen w-screen border-2 border-green-500 overflow-hidden">
                    <img src={image} className="img-cover" />
                </div>

                <div className="btns h-[20vh] flex flex-col justify-center gap-3 absolute bottom-0 left-0 w-full p-6">

                    <button onClick={startDiagnosis} className='btn-dark'>Start Diagnosis</button>

                    <button onClick={() => setImage(null)} className='btn-outline bg-black bg-opacity-40'>Take Picture Again</button>

                </div>
            </div>
        }

        <div className="fixed bottom-0 right-0 p-6 z-20">
            <div onClick={() => inputRef.current.click()} className="h-[40px] w-[40px] rounded-full bg-black bg-opacity-40 flex-center text-white">
                <Upload />
            </div>

            <input ref={inputRef} type="file" name="image" accept='image/*' className="h-0 w-0 opacity-0" onChange={handleUpload} />
        </div>
      
    </div>
  )
}

export default Home