import { Routes, Route } from "react-router-dom";
<Routes>    
    <Route path="/"element={<home />} />
    <Route path ="/events/:id" elements={<eventdetail />} />
    <Route path="/explore" element={<explore />}  />
    <Route path="*" element={<error />} />
</Routes>    