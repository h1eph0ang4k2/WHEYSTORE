using MyRow = wheystore.SanPhamDB.GioHangRow;

namespace wheystore.SanPhamDB;

public interface IGioHangSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class GioHangSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IGioHangSaveHandler
{
}