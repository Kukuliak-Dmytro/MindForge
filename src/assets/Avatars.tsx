interface avatarProps {
    id?: 1 | 2 | 3 | 4 | 5 | 6;
    size?: number;
}
import avatarImg0 from './avatarImg0.png';
import avatarImg1 from './avatarImg1.png';
import avatarImg2 from './avatarImg2.png';
import avatarImg3 from './avatarImg3.png';
import avatarImg4 from './avatarImg4.png';
import avatarImg5 from './avatarImg5.png';
import avatarImg6 from './avatarImg6.png';

export default function Avatar({ id, size }: avatarProps) {
    const avatarStyle = size ? { width: size, height: size } : {};
    switch (id) {
        case 1:
            return <img src={avatarImg1} alt="" style={avatarStyle} />
        case 2:
            return <img src={avatarImg2} alt="" style={avatarStyle} />
        case 3:
            return <img src={avatarImg3} alt="" style={avatarStyle} />
        case 4:
            return <img src={avatarImg4} alt="" style={avatarStyle} />
        case 5:
            return <img src={avatarImg5} alt="" style={avatarStyle} />
        case 6:
            return <img src={avatarImg6} alt="" style={avatarStyle} />
        default:
            return <img src={avatarImg0} alt="" style={avatarStyle} />
    }
}