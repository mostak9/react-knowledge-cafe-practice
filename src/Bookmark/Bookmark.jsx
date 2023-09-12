import PropTypes from 'prop-types';


const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-white p-5 rounded-md text-black my-4'>
            <p className='font-semibold'>{title}</p>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired,
}
export default Bookmark;