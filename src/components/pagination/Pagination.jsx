import { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";

const Pagination = () => {
  const [data, setData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const getData = await fetch(
          "https://657fc2666ae0629a3f53998c.mockapi.io/api/curd"
        );
        if (!getData.ok) {
          throw new Error("Network Error");
        }
        const d = await getData.json();
        setData(d);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Filter data based on the search input
  const filteredData = data?.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  //Pagination
  // Calculate the indexes for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the data for the current page
  const currentData = filteredData?.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search By Name"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Active Status</th>
              <th>Avatar</th>
            </tr>
          </thead>
          <tbody>
            {currentData?.map((i, ind) => (
              <tr key={ind}>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.active ? "yes" : "No"}</td>
                <td>
                  <img src={i.avatar} height={50} alt={i.name} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <div>
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <span>{`Page ${currentPage} of ${totalPages}`}</span>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default Pagination;
