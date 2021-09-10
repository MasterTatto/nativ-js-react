import React, {useState} from 'react';
import API from './API';
import './lesson_3';

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [serachResult, setSerachResult] = useState<any>(null);
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState<any>(null);

    const searchFilm = () => {
        API.searchFilmsByTitle(searchName).then((response: any) => {
            console.log(response)
            setSerachResult(response)
        })
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t === 'movie' ? 'movie' : 'series';
        console.log(type)
        API.searchFilmsByType(searchNameByType, type).then((response: any) => {
            console.log(response)
            setSerachResultByType(response)
        })
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                {serachResult === null ? '' :
                    <div>
                        <h1>{serachResult.data.Title}</h1>
                        <img src={serachResult.data.Poster} alt=""/>
                        <h4>{!serachResult.data.Ratings ? '' : `${serachResult.data.Ratings[0].Source}:   ${serachResult.data.Ratings[0].Value} `}</h4>

                        {serachResult.config.url === '' ? '' : JSON.stringify(serachResult)}
                    </div>
                }
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType}
                       onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                {serachResultByType === null ? '' :
                    <div>
                        <h1>{serachResultByType.data.Title}</h1>
                        <img src={serachResultByType.data.Poster} alt=""/>
                        <h4>{!serachResultByType.data.Ratings ? '' : `${serachResultByType.data.Ratings[0].Source}:   ${serachResultByType.data.Ratings[0].Value} `}</h4>

                        {serachResultByType.config.url === '' ? '' : JSON.stringify(serachResultByType)}
                    </div>
                }
            </div>
        </div>
    );
}
export default Lesson3;