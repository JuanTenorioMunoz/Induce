const SearchBar = () => {
    return(
        <div className=" w-1/4 flex items-center px-[24px] py-[16px] rounded-[12px] border border-[var(--color-violet_blue_500)]">
            <i className="bi bi-search mr-2 text-[var(--color-violet_blue_500)]"></i>
            <input type="text" placeholder="Buscar aquí..." className="flex-1 border-none outline-none bg-transparent focus:outline-none"></input>
        </div>
    )
}

export default SearchBar;