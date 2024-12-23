import {Link} from 'react-router-dom';
import '../scss/header.scss';

function Header() {
    const navClick = (e) => {
        // 현재 클릭된 노드
        let currentNode = e.currentTarget;
    
        // 부모 노드
        let parentNode = currentNode.parentNode.parentNode;

        // 형제 노드 선택
        let siblings = Array.from(parentNode.children).filter(
          (child) => child !== currentNode.parentNode
        );
    
        // 현재 노드에 클래스 추가
        if(!currentNode.classList.contains('on')){
          currentNode.className += ' on';
        }
    
        // 주변 노트 클래스 제거
        siblings.forEach((e) => {
          e.querySelector('a').classList.remove('on');
        })
          
      }

    return (
        <header>
            <div className="headerInner">
                <h1><Link to="/">Mac Studio</Link></h1>

                <nav>
                    <ul>
                        <li><Link to="/" className='on' onClick={navClick}>개요</Link></li>
                        <li><Link to="/" onClick={navClick}>제품사양</Link></li>
                    </ul>
                </nav>
            </div>
        </header>    
    );
}

export default Header;