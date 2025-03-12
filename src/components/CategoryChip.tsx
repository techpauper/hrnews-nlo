
import { Link } from "react-router-dom";

interface CategoryChipProps {
  id: string;
  name: string;
  small?: boolean;
}

const CategoryChip = ({ id, name, small = false }: CategoryChipProps) => {
  return (
    <Link 
      to={`/category/${id}`} 
      className={`
        inline-block bg-gray-100 hover:bg-gray-200 transition-colors
        border border-gray-200 rounded-md font-sans tracking-wide
        ${small ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm'}
      `}
    >
      {name}
    </Link>
  );
};

export default CategoryChip;
