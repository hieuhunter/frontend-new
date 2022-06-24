import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { getCookie } from 'utils/cookies';

export default function useUser() {
	const [user, setUser] = useState(null);
	const [isLoadingUser, setIsLoadingUser] = useState(true);
	const { data, mutate: mutateUser } = useSWR(getCookie('token') ? `/auth/me` : null);

	useEffect(() => {
		if (data) {
			setIsLoadingUser(false);
			if (data.data) {
				setUser(data.data);
			}
		}
	}, [data]);

	return {
		user,
		isLoadingUser,
		mutateUser
	};
}
