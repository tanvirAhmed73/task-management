import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useToDoListing = () => {
    const axiosSecure = useAxiosSecure()
    const {data: createTask = [], isPending: loading, refetch} = useQuery({
        queryKey: ['createTask'], 
        queryFn: async() =>{
            const res = await axiosSecure.get('/createTask');
            return res.data;
        }
    })


    return [createTask, loading, refetch]
};

export default useToDoListing;