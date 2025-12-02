using MyRow = wheystore.SanPhamDB.XaPhuongRow;

namespace wheystore.SanPhamDB;

public interface IXaPhuongSaveHandler : ISaveHandler<MyRow, SaveRequest<MyRow>, SaveResponse> { }

public class XaPhuongSaveHandler(IRequestContext context) :
    SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>(context),
    IXaPhuongSaveHandler
{
}