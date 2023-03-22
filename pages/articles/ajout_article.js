import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { useReducer } from 'react';
import { FileUpload } from 'primereact/fileupload';
import { useQueryClient, useMutation } from 'react-query';


const FormLayoutDemo = () => {
    const [image, setImage] = useState(null);
    const [titre, setTitre] = useState('');
    const [description, setDescription] = useState('');
    const [contenu, setContenu] = useState('');

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        console.log("hello there")
        const formData = new FormData();
        formData.append('image', image);
        formData.append('titre', titre);
        formData.append('description', description);
        formData.append('contenu', contenu);
        try {
            const response = await fetch('http://localhost:5050/service/ajouter_article',
                {
                    method:'POST',
                    body:formData
                });
            console.log(response);

        } catch (error) {
            console.log(error);
        }
        console.log(formData);
    }
    const toast = useRef(null);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    };
    return (
        <div className="grid">
            <div className="col-12 md:col-6">
                <div className="card p-fluid">
                    <form onSubmit={handleSubmit}>
                        <h5>Ajouter Article</h5>
                        <div className="field">
                            <label htmlFor="titre">Titre Article</label>
                            <InputText onChange={(e) => setTitre(e.target.value)} id="titre" name="titre" type="text" />
                        </div>

                        <div className="field col-12">
                            <label htmlFor="description">Description</label>
                            <InputTextarea id="description" name="description" onChange={(e) => setDescription(e.target.value)} rows="4" />

                        </div>

                        <div className="field col-12">
                            <label htmlFor="contenu">Contenu</label>
                            <InputTextarea id="contenu" name="contenu" onChange={(e) => setContenu(e.target.value)} rows="4" />

                        </div>

                        <div>
                            <FileUpload name="image" onSelect={(e) => {
                                setImage(e.files[0])
                            }}
                                onUpload={onUpload} accept="image/*" maxFileSize={3000000}
                                emptyTemplate={<p className="m-0">Drag and drop files to here to upload.</p>} />
                        </div>

                        <button className="submit_button" type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FormLayoutDemo;