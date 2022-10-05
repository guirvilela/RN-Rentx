import React, { useState, useRef } from "react";
import { Dimensions, FlatList, ViewToken } from "react-native";

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from "./styles";

interface Props {
  imagesUrl: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken;
}

const ImageSlider: React.FC<Props> = ({ imagesUrl }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [flatListRef, setFlatListRef] = useState<any>();

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setImageIndex(index);
  });

  const handleGoToImage = (index) => {
    flatListRef.scrollToIndex({ animated: true, index });
  };

  const getItemLayout = (data, index) => {
    return {
      length: imagesUrl.length,
      offset: Dimensions.get("window").width * index,
      index,
    };
  };

  return (
    <Container>
      {imagesUrl && (
        <>
          <ImageIndexes>
            {imagesUrl.map((_, index) => (
              <ImageIndex
                key={index}
                active={index === imageIndex}
                onPress={() => handleGoToImage(index)}
              />
            ))}
          </ImageIndexes>

          <FlatList
            data={imagesUrl}
            ref={setFlatListRef}
            keyExtractor={(key) => key}
            renderItem={({ item }) => (
              <CarImageWrapper>
                <CarImage source={{ uri: item }} resizeMode="contain" />
              </CarImageWrapper>
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
            onViewableItemsChanged={indexChanged.current}
            getItemLayout={getItemLayout}
          />
        </>
      )}
    </Container>
  );
};
export default ImageSlider;
