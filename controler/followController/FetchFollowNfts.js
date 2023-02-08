import cellModal from "../../modal/buycells.js";
export const fetchFollowNfts = async (req, res, next) => {
  try {
    let userFollowNfts = [];
    const { userNFTs } = req?.body;
    console.log(" Follow:", req?.body);
    for (let _id of userNFTs) {
      const followNfts = await cellModal.findOne({ _id: _id });
      if (followNfts) {
        userFollowNfts.push(followNfts);
      }
    }

    return res.json(userFollowNfts);
  } catch (error) {
    console.log("fetch folowers error", error);
    next();
  }
};
