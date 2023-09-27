import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import styles from "./nearbyjobs.style";
import { COLORS } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import { getJobsFromApi } from "../../../services/job";
import { useQuery } from "react-query";

const Nearbyjobs = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["jobs"],
    queryFn: getJobsFromApi,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text styles={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : isError ? (
          <Text>Something went wrong!</Text>
        ) : (
          data?.map((job) => (
            <NearbyJobCard
              key={job.job_id}
              job={job}
              handleNavigate={() => router.push(`/jobdetails/${job.job_id}`)}
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
