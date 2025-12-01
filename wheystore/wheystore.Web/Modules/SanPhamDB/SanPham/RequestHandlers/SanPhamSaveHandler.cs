using MyRow = wheystore.SanPhamDB.SanPhamRow;

namespace wheystore.SanPhamDB;

public interface ISanPhamSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class SanPhamSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    ISanPhamSaveHandler
{
}