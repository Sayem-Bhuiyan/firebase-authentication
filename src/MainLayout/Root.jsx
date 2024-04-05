import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <h2 className="text-3xl">This is Root </h2>
            <Outlet />
        </div>
    );
};

export default Root;