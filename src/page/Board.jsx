import React, { useState, useEffect } from 'react';
import Boardcss from './css/board.module.css'
import { Link } from 'react-router-dom'
import Maincss from './css/style.module.css'

const Board = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [postCount, setPostCount] = useState(0); // 게시글 수 상태 추가

    // 컴포넌트가 마운트될 때 localStorage에서 게시글 불러오기
    useEffect(() => {
        const savedPosts = localStorage.getItem('posts');
        if (savedPosts) {
            const parsedPosts = JSON.parse(savedPosts);
            setPosts(parsedPosts);
            setPostCount(parsedPosts.length); // 게시글 수 초기화
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && content) {
            const newPosts = [...posts, { title, content, image }];
            setPosts(newPosts);
            setPostCount(newPosts.length); // 게시글 수 업데이트
            localStorage.setItem('posts', JSON.stringify(newPosts)); // localStorage에 저장
            setTitle('');
            setContent('');
            setImage(null); // 이미지 초기화
        }
    };

    const handleDelete = (index) => {
        const newPosts = posts.filter((_, i) => i !== index);
        setPosts(newPosts);
        setPostCount(newPosts.length); // 게시글 수 업데이트
        localStorage.setItem('posts', JSON.stringify(newPosts)); // localStorage에 업데이트
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // 이미지 미리보기 설정
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <>
        
            <header className={Maincss.site_header}>
                <nav className={Maincss.gnb}>
                    <h3 className={Maincss.header_logo}>
                        <a href="#"><p className={Maincss.title_logo}>EcoGourmet</p></a>
                    </h3>
                    <ul>
                        <li>
                            <Link to='/'>홈</Link>
                        </li>
                        <li>
                            <Link to='/price'>도매시장</Link>
                        </li>
                        <li>
                            <Link to='http://localhost:5500/'>텃밭분양</Link>
                        </li>
                        <li>
                            <Link to='/board'>커뮤니티</Link>
                        </li>
                    </ul>
                    <div className={Maincss.login}>
                        <a href="#">login</a>
                        <div className={Maincss.login2}>
                            <p>Get Started</p>
                        </div>
                    </div>
                </nav>
            </header>
            <div className={Boardcss.board_container}>
                <h1>나만의 농사활동을 공유해보세요</h1>
                <form className={Boardcss.board_form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="제목을 지어주세요"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                    <textarea
                        placeholder="내용을 입력해주세요"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                    <input
                        type="file"
                        accept="image/*" // 이미지 파일만 업로드 가능
                        onChange={handleImageChange}
                    />
                    {image && <img src={image} alt="Preview" style={{ width: '100%', margin: '10px 0', borderRadius: '4px' }} />} {/* 미리보기 */}
                    <button type="submit">게시하기</button>
                </form>

                <div>
                    {posts.map((post, index) => (
                        <div className={Boardcss.post} key={index}>
                            <h2>{post.title}</h2>
                            <p>{post.content}</p>
                            {post.image && <img src={post.image} alt="Post" style={{ width: '100%', margin: '10px 0', borderRadius: '4px' }} />} {/* 게시글에 이미지 표시 */}
                            <div className={Boardcss.post_delete_button}>
                                <button onClick={() => handleDelete(index)}>삭제</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 게시글 수 표시 박스 */}
                <div className={Boardcss.post_count}>
                    게시글 수: {postCount}
                </div>
            </div>
        </>
    );
};

export default Board;
