import Tour from '../models/Tour.js'


export const createTour = async (req, res) => {
  try {
    const newTour = new Tour(req.body)
    const savedTour = await newTour.save()

    res.status(200).json({
      success: true,
      message: 'Successfully created',
      data: savedTour,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create',
      error: err.message,
    })
  }
}

export const updateTour = async (req, res) => {
  const { id } = req.params

  try {
    const updatedTour = await Tour.findByIdAndUpdate(
      id,
      req.body,              // no need for $set
      {
        new: true,
        runValidators: true, // ✅ validates schema
      }
    )

    if (!updatedTour) {
      return res.status(404).json({
        success: false,
        message: 'Tour not found',
      })
    }

    res.status(200).json({
      success: true,
      message: 'Successfully updated',
      data: updatedTour,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to update',
      error: err.message,
    })
  }
}

export const deleteTour = async (req, res) => {

    const id = req.params.id;

    try{
        await Tour.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Successfully Delete",
        });
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: "failed to delete",
        });
    }
};

export const getSingleTour = async (req, res) => {

    const id = req.params.id

    try{
        const tour = await Tour.findById(id).populate('reviews');

        res.status(200).json({
            success: true,
            message: "get single tour",
            data: tour,
        });
    }
    catch(err){
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
};

export const getAllTour = async (req, res) => {

    const page = parseInt(req.query.page)

    try{
        const tours = await Tour.find({}).populate('reviews').skip(page*8).limit(8);

        res.status(200).json({
            success: true,
            message: "successful",
            count: tours.length,
            data: tours,
        });
    }
    catch(err){
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
};

export const getTourBySearch = async (req, res) => {

    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try{
        const tours = await Tour.find({city, distance:{$gte: distance}, maxGroupSize:{$gte:maxGroupSize}}).populate('reviews');

        res.status(200).json({
            success: true,
            message: "successful",
            data: tours,
        });
    }
    catch(err){
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
};

export const getFeaturedTour = async (req, res) => {
    try{
        const tours = await Tour.find({featured: true}).populate('reviews').limit(8);

        res.status(200).json({
            success: true,
            message: "successful",
            data: tours,
        });
    }
    catch(err) {
        res.status(404).json({
            success: false,
            message: "not found",
        });
    }
};

export const getTourCount = async (req, res) => {
    try{
        const tourCount = await Tour.estimatedDocumentCount();

        res.status(200).json({
            success: true, 
            message: "successful",
            data: tourCount,
        });
    }
    catch (err){
        res.status(500).json({
            success: false,
            message: "failed to fetch",
        });
    }
};
