const Bio = () => {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About the Artist</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            Hello, I’m [Artist's Name], a passionate artist specializing in [Medium/Style]. I have been creating
            art for over [X] years, drawing inspiration from [Inspirations or Themes]. My work explores
            [brief description of themes, techniques, or unique qualities].
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Over the years, I have exhibited my work in galleries across [Locations], and my pieces have found
            homes with collectors from all around the world.
          </p>
        </div>
      </div>
    );
  };
  
  export default Bio;
  