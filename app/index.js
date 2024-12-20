import {  useState } from "react";
import Screen from "./screens/Screen";
import ImageInputList from "../Components/ImageInputList";
export default function App() {
    const [imageUris, setImageUris] = useState([]);

    const handleAdd = (uri) => { 
        setImageUris([...imageUris, uri])
    }
    const hanldRemove = (uri) => { 
        setImageUris(imageUris.filter(imageUri => imageUri !== uri))
    }

 
    return (
        <Screen>
           
            <ImageInputList
             imageUris={imageUris} 
             onAddImage={handleAdd}
             onRemoveImage={hanldRemove}
             />
        </Screen>
    );
}
