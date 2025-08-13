/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import tsconfigPaths from "vite-tsconfig-paths";
export default defineConfig({
    plugins: [
        tsconfigPaths({
            projects: ['tsconfig-test.json']
        })
    ],
    test: {
        coverage: {
            reporter: ['json', 'html', 'cobertura']
        }
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidml0ZXN0LmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3ZpdGVzdC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0NBQWdDO0FBQ2hDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0MsT0FBTyxhQUFhLE1BQU0scUJBQXFCLENBQUM7QUFFaEQsZUFBZSxZQUFZLENBQUM7SUFDMUIsT0FBTyxFQUFFO1FBQ1AsYUFBYSxDQUFDO1lBQ1osUUFBUSxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDakMsQ0FBQztLQUNIO0lBQ0QsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFO1lBQ1IsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUM7U0FDeEM7S0FDRjtDQUNGLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZXN0XCIgLz5cbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVzdC9jb25maWcnO1xuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSBcInZpdGUtdHNjb25maWctcGF0aHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHRzY29uZmlnUGF0aHMoe1xuICAgICAgcHJvamVjdHM6IFsndHNjb25maWctdGVzdC5qc29uJ11cbiAgICB9KVxuICBdLFxuICB0ZXN0OiB7XG4gICAgY292ZXJhZ2U6IHtcbiAgICAgIHJlcG9ydGVyOiBbJ2pzb24nLCAnaHRtbCcsICdjb2JlcnR1cmEnXVxuICAgIH1cbiAgfSxcbn0pO1xuIl19